import { data2 } from "./data2";
import "./Bai2.css";
function Bai2() {
  return (
    <div
      style={{
        padding: 10,
      }}
    >
      <div
        style={{
          height: 300,
          width: "100%",
          backgroundColor: "aqua",
        }}
      >
        Content
      </div>
      <div
        style={{
          float: "left",
          display: "flex",
          flexDirection: "row",
          marginTop: -70,
          width: "100%",
          justifyContent: "space-around",
          paddingRight: 100,
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {data2.map((item) => (
          <div
            key={item.item}
            style={{
              backgroundColor: "red",
              height: 500,
              width: "20%",
              color: "blue",
              padding: 10,
              borderRadius: 10,
            }}
          >
            <div>{item.name}</div>
            <div>{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bai2;
