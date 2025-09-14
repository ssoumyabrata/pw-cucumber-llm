import { chromium, firefox, webkit, LaunchOptions } from '@playwright/test';


const options: LaunchOptions = {
	headless: false,
	slowMo: 500,
};	

// 	async closeBrowser() {
// 	if (this.browser) {
// 		await this.browser.close();
// 		this.browser = null;
// 	}
// }

export const invokeBrowser = () => {
	const browserType = process.env.BROWSER;
	switch (browserType) {
		case 'chrome':
			return chromium.launch(options);
		case 'firefox':
			return firefox.launch(options);
		case 'webkit':
			return webkit.launch(options);
		default:
			throw new Error(`Unsupported browser type: ${browserType}`);

	}
}
