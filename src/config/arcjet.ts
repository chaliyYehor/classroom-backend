import arcjet, { detectBot, shield, slidingWindow, tokenBucket } from '@arcjet/node'

if(!process.env.ARCJET_KEY && process.env.NODE_ENV !== 'test') {
	throw new Error('ARCJET env is reqired')
}

export const aj = arcjet({
  key: process.env.ARCJET_KEY!,
  rules: [
    shield({ mode: "LIVE" }),
    detectBot({
      mode: "LIVE",
      allow: [
        "CATEGORY:SEARCH_ENGINE",
				"CATEGORY:PREVIEW"
      ],
    }),
    slidingWindow({
			mode: 'LIVE',
			interval: '2s',
			max: 5,
		})
  ],
});