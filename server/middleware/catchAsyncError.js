const CatchAsyncError = function (theFunc) {
  return function (req, res, next) {
    Promise.resolve(theFunc(req, res, next)).catch(next);
  };
};

export default CatchAsyncError;
