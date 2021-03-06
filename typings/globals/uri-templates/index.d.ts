// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/16c0f2c75a30cace4d673b363bbe7af2fe31cc86/uri-templates/uri-templates.d.ts
declare module 'uri-templates' {
	function utpl(template: string): utpl.URITemplate;

	module utpl {
		export interface URITemplate {
			fillFromObject(vars: Object): string;
			fill(callback: (varName: string) => string): string;
			fromUri(uri: string): Object;
		}
	}

	export = utpl;
}
