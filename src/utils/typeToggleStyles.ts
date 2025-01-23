export const getSegmentedControlStyles = (
  isTypeOpen: boolean,
  selectedType: number | null,
  types: { id: number; color: string; border?: string }[]
) => {
  return {
    backgroundColor: isTypeOpen || !selectedType
      ? "#EBEBEB"
      : types.find(type => type.id === selectedType)?.color,
    border: selectedType && !isTypeOpen
      ? `1px solid ${types.find(type => type.id === selectedType)?.border}`
      : "",
  };
};

export const getTypeStyles = (type: { color: string; border?: string }) => {
  return {
    backgroundColor: type.color,
    border: type.border ? `1px solid ${type.border}` : type.color,
  };
};