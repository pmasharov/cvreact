const ACTIVATE_LINK = 'ACTIVATE_LINK';

const activateLink = function (data) {
  return {
    type: ACTIVATE_LINK,
    data: data,
  };
}

export {
  activateLink, ACTIVATE_LINK
}