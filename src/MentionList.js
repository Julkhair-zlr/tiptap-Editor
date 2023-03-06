import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";

export default forwardRef((props, ref) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectItem = (index) => {
    const item = props.items[index];
    console.log("items ra :: ", item);

    if (item) {
      props.command({ id: item });
    }
  };

  const upHandler = () => {
    setSelectedIndex(
      (selectedIndex + props.items.length - 1) % props.items.length
    );
  };

  const downHandler = () => {
    setSelectedIndex((selectedIndex + 1) % props.items.length);
  };

  const enterHandler = () => {
    selectItem(selectedIndex);
  };

  useEffect(() => setSelectedIndex(0), [props.items]);

  useImperativeHandle(ref, () => ({
    onKeyDown: ({ event }) => {
      if (event.key === "ArrowUp") {
        upHandler();
        return true;
      }

      if (event.key === "ArrowDown") {
        downHandler();
        return true;
      }

      if (event.key === "Enter") {
        enterHandler();
        return true;
      }

      return false;
    },
  }));

  return (
    <div
      className="items"
      style={{
        border: "2px groove black",
        borderRadius: "5px",
        width: "10rem",
        background: "lightblue",
      }}
    >
      {props.items.length ? (
        props.items.map((item, index) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
            key={index}
          >
            <p
              style={{ color: "red", fontSize: "1rem", cursor: "pointer" }}
              className={`item ${index === selectedIndex ? "is-selected" : ""}`}
              // key={index}
              onClick={() => selectItem(index)}
            >
              {item}
            </p>
            <button
              className={`item ${index === selectedIndex ? "is-selected" : ""}`}
              // key={index}
              onClick={() => selectItem(index)}
            >
              {/* => */}
            </button>
          </div>
        ))
      ) : (
        <div className="item">No result</div>
      )}
    </div>
  );
});
