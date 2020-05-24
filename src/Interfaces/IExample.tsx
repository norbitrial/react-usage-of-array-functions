interface IExample {
  nodeId: string;
  label: string;
  nodes?: Array<IExample>;
}

export default IExample;
