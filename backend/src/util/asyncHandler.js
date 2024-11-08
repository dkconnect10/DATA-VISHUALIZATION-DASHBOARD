
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
      Promise.resolve(requestHandler(req, res, next))
        .catch((err) => {
          if (!(err instanceof Error)) {
            err = new Error(err.message || "Internal Server Error");
          }
          next(err);
        });
    };
  };
  
  
  export {asyncHandler}
  
  