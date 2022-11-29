const inDevelopment = process.env.NODE_ENV !== 'production'

export const server = inDevelopment 
	? 'http://localhost:3000'
	: 'https://storskog.vercel.app'