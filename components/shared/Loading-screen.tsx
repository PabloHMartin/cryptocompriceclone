import Image from "next/image";
import LinearProgress from "@mui/material/LinearProgress";

export default function LoadingScreen() {
  return (
    <div>
      <LinearProgress />
      <div style={{ marginTop: "5%" }}>
        <Image
          src={"/crypto-com-logo-97d76b3f915718114e9259313d3da5fc.webp"}
          alt="asset logo"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}
