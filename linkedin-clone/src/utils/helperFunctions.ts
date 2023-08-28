export const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  // Truncate text and add ellipsis
  export const truncateText = (text: string, length: number) => {
    return text.length > length ? text.substring(0, length) + '...' : text;
  };
  
  // Provide a fallback URL for images
  export const safeImage = (url: string, fallbackUrl: string) => {
    const img = new Image();
    img.src = url;
    img.onerror = () => { img.src = fallbackUrl; };
    return img.src;
  };
  
  // Filter an array of objects based on a keyword and property
  export const filterByKeyword = (array: any[], keyword: string, property: string) => {
    return array.filter(item => item[property].toLowerCase().includes(keyword.toLowerCase()));
  };
  
  // Sort an array of objects by a date property
  export const sortByDate = (array: any[], property: string, ascending: boolean = true) => {
    return array.sort((a, b) => {
      const dateA = new Date(a[property]).getTime();
      const dateB = new Date(b[property]).getTime();
      return ascending ? dateA - dateB : dateB - dateA;
    });
  };
  