export const getIconStyles = (
  selectedType: number | null,
  types: { id: number; color: string; border?: string }[]
) => {
  const selectedTypeData = types.find((type) => type.id === selectedType);

  return {
    backgroundColor: selectedType
      ? selectedTypeData?.color || 'transparent'
      : '#D9D9D9',
    border: selectedTypeData?.border
      ? `2px solid ${selectedTypeData.border}`
      : 'none',
  };
};

export const getBorderColor = (
  selectedType: number | null,
  types: { id: number; color: string; border?: string }[]
) => {
  const selectedTypeData = types.find((type) => type.id === selectedType);

  return selectedType
    ? selectedTypeData?.border || selectedTypeData?.color
    : '#D9D9D9';
};
