export const ColorMessage = (props: any) => {
  const { color, children } = props;
  const contentStyleA = {
    color,
    fontSize: '18px',
  };
  return <p style={contentStyleA}>{children}</p>;
};
