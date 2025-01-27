export const getIconStyles = (
  selectedType: number | null,
  types: { id: number; color: string; border?: string }[]
) => {
  const selectedTypeData = types.find((type) => type.id === selectedType);

  return {
    backgroundColor: selectedType
      ? selectedTypeData?.color || 'transparent'
      : '#DCCE90',
    border: selectedTypeData?.border
      ? `2px solid ${selectedTypeData.border}`
      : 'none',
    color: selectedTypeData?.border ? selectedTypeData.border : 'inherit',
  };
};

export const getBorderColor = (
  selectedType: number | null,
  types: { id: number; color: string; border?: string }[]
) => {
  const selectedTypeData = types.find((type) => type.id === selectedType);

  return selectedTypeData?.border || '#FFFFFF';
};