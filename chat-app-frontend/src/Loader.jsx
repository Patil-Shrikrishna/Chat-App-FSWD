import { Circles } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div>
      <Circles
        height="80"
        width="80"
        color="#0b5ed7"
        ariaLabel="circles-loading"
        wrapperClass=""
        visible={true}
        wrapperStyle={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      />
    </div>
  );
};
