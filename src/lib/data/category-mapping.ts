export interface CategoryMapping {
	mainCategory: string;
	subCategories: string[];
}

export const CATEGORY_MAPPING: CategoryMapping[] = [
	{
		mainCategory: 'web-application',
		subCategories: [
			'js',
			'ts',
			'css',
			'html',
			'sass',
			'reactjs',
			'svelte',
			'vuejs',
			'bootstrap',
			'tailwind',
			'nodejs',
			'expressjs',
			'firebase',
			'mongodb',
			'vite'
		]
	},
	{
		mainCategory: 'mobile-application',
		subCategories: ['swift', 'reactnative', 'flutter', 'dart', 'kotlin', 'java', 'objectivec']
	},
	{
		mainCategory: 'embedded-systems',
		subCategories: ['c', 'cpp', 'python', 'matlab', 'arduino', 'raspberrypi', 'verilog']
	},
	{
		mainCategory: 'ai-ml',
		subCategories: ['python', 'tensorflow', 'pytorch', 'scikit-learn', 'opencv', 'numpy', 'pandas']
	}
];

export const getSubCategories = (mainCategory: string): string[] => {
	const category = CATEGORY_MAPPING.find((cat) => cat.mainCategory === mainCategory);
	return category ? category.subCategories : [];
};

export const getMainCategories = (): string[] => {
	return CATEGORY_MAPPING.map((cat) => cat.mainCategory);
};
