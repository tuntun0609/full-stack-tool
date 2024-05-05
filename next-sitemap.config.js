/**
 * @type {import('next-sitemap').IConfig}
 * @see https://github.com/iamvishnusankar/next-sitemap#readme
 */
module.exports = {
	siteUrl: 'https://full-stack-tool.tuntun.site',
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: [{ userAgent: '*', allow: '/' }],
	},
}