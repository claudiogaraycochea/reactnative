export const getSubcriberLib = (subscribers, filter) => {
  const index = subscribers.findIndex((item => item.id === filter.id));
  if (subscribers[index]) return subscribers[index];
	return null;
};