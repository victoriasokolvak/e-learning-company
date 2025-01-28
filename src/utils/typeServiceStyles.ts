export const getBgStyles = (
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

export const getLineColor = (
  selectedType: number | null,
  types: { id: number; color: string; border?: string }[]
) => {
  if (selectedType === null) {
    return '#DCCE90';
  }

  const selectedTypeData = types.find((type) => type.id === selectedType);

  return selectedTypeData?.border || selectedTypeData?.color || '#FFFFFF';
};

export const getIconColor = (
  selectedType: number | null,
  types: { id: number; color: string; border?: string }[]
): string => {
  const selectedTypeData = types.find((type) => type.id === selectedType);

  if (!selectedTypeData) {
    return "#FFFFFF";
  }

  if (selectedTypeData.border) {
    return selectedTypeData.border;
  }

  if (selectedTypeData.color) {
    return "#FFFFFF";
  }

  return "#FFFFFF";
};
