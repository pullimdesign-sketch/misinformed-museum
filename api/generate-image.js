const MODEL = process.env.OPENAI_IMAGE_MODEL || 'gpt-image-2.5-flare';

function clean(value, max = 80) {
  return String(value || '').replace(/[<>]/g, '').trim().slice(0, max);
}

function buildPrompt(body) {
  const name = clean(body.name, 10);
  const accession = clean(body.accession, 24);
  const title = clean(body.title, 50);
  const hypothesis = clean(body.hypothesis, 50);
  const hypothesisDescription = clean(body.hypothesisDescription, 180);

  if (body.type === 'reconstruction') {
    return `Create a serious museum cultural-reconstruction still, not fantasy and not dreamcore. A future museum in 2526 is reconstructing how people in 2026 supposedly used the ordinary Korean object "${name}". The museum has incorrectly classified it as "${hypothesis}": ${hypothesisDescription}. Show a believable 2026 institutional interior with one or several people calmly using the object according to this incorrect theory. Restrained documentary cinematography, symmetrical composition, clinical props, practical wardrobe, natural human behavior, muted sage green and warm neutral palette, slightly high contrast, archival 35mm film texture, no captions, no logos, no readable text, no surreal glow. Landscape 16:9 exhibition still.`;
  }

  return `Create a rigorous museum conservation photograph of the ordinary Korean object "${name}", accession ${accession}. Present the real recognizable object alone as an excavated artifact from 2026, centered on a matte charcoal-black conservation table. Include subtle scale bars, specimen supports, raking light, restrained sage-green calibration light, tiny dust and realistic wear. Three-quarter orthographic product view, museum archive photography, forensic and sober, high material detail, slightly high contrast, no people, no fantasy, no captions, no logos, no readable text. The future archive calls it "${title}". Square composition.`;
}

export default async function handler(request, response) {
  if (request.method !== 'POST') return response.status(405).json({ error: 'Method not allowed' });
  if (!process.env.OPENAI_API_KEY) return response.status(503).json({ error: 'Image generation is not configured' });

  const body = request.body || {};
  if (!/^[가-힣]{1,10}$/.test(String(body.name || ''))) return response.status(400).json({ error: 'Invalid object name' });
  if (!['artifact', 'reconstruction'].includes(body.type)) return response.status(400).json({ error: 'Invalid image type' });

  try {
    const apiResponse = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: MODEL,
        prompt: buildPrompt(body),
        size: body.type === 'reconstruction' ? '1536x1024' : '1024x1024',
        quality: 'low',
        output_format: 'webp',
        output_compression: 82,
        n: 1
      })
    });

    const result = await apiResponse.json();
    if (!apiResponse.ok || !result.data?.[0]?.b64_json) {
      return response.status(apiResponse.status || 502).json({ error: result.error?.message || 'Image generation failed' });
    }

    response.setHeader('Cache-Control', 'no-store');
    return response.status(200).json({ image: `data:image/webp;base64,${result.data[0].b64_json}`, model: MODEL });
  } catch (error) {
    return response.status(500).json({ error: 'Image generation failed' });
  }
}
