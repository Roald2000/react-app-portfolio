import PropTypes from "prop-types";

export default function MainComponent(MainComponentProps) {
  const { className, children } = MainComponentProps;

  return <main className={className}>{children}</main>;
}

MainComponent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
