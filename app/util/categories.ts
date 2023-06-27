export const mapFromCategories = (categories: string[]) => {
	let result = '';
	categories.map((category) => (result += `${category};`));
	return result;
  };

  export const mapToCategories = (categories: string) => {
	return categories.split(';').filter((e) => e);
  };
