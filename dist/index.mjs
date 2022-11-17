// src/DeviceFrameset.tsx
import React, { useMemo } from "react";

// src/DeviceOptions.ts
var defineDevice = (definition) => definition;
var DeviceOptions = {
  ["Nest Hub Max"]: defineDevice({
    device: "ipad",
    colors: ["black", "silver"],
    hasLandscape: true,
    width: 1280,
    height: 800
  }),
  ["Nest Hub"]: defineDevice({
    device: "ipad",
    colors: ["black", "silver"],
    hasLandscape: true,
    width: 1024,
    height: 600
  }),
  ["Samsung Galaxy A51/71"]: defineDevice({
    device: "note8",
    colors: ["black", "silver"],
    hasLandscape: true,
    width: 412,
    height: 914
  }),
  ["Galaxy Fold"]: defineDevice({
    device: "note8",
    colors: ["black", "silver"],
    hasLandscape: true,
    width: 280,
    height: 653
  }),
  ["Surface Duo"]: defineDevice({
    device: "ipad",
    colors: ["black", "silver"],
    hasLandscape: true,
    width: 540,
    height: 720
  }),
  ["Surface Pro 7"]: defineDevice({
    device: "ipad",
    colors: ["black", "silver"],
    hasLandscape: true,
    width: 912,
    height: 1368
  }),
  ["iPad Mini"]: defineDevice({
    device: "ipad",
    colors: ["black", "silver"],
    hasLandscape: true,
    width: 768,
    height: 1024
  }),
  ["iPad Air"]: defineDevice({
    device: "ipad",
    colors: ["black", "silver"],
    hasLandscape: true,
    width: 820,
    height: 1180
  }),
  ["Samsung Galaxy S20 Ultra"]: defineDevice({
    device: "note8",
    colors: [],
    hasLandscape: true,
    width: 412,
    height: 915
  }),
  ["Samsung Galaxy S8+"]: defineDevice({
    device: "note8",
    colors: [],
    hasLandscape: true,
    width: 360,
    height: 740
  }),
  ["Pixel 5"]: defineDevice({
    device: "nexus5",
    colors: [],
    hasLandscape: true,
    width: 393,
    height: 851
  }),
  ["iPhone 12 Pro"]: defineDevice({
    device: "iphone-x",
    colors: [],
    hasLandscape: true,
    width: 390,
    height: 844
  }),
  ["iPhone XR"]: defineDevice({
    device: "iphone-x",
    colors: [],
    hasLandscape: true,
    width: 414,
    height: 896
  }),
  ["iPhone SE"]: defineDevice({
    device: "iphone8",
    colors: [],
    hasLandscape: true,
    width: 375,
    height: 667
  })
};
var DeviceNames = Object.keys(DeviceOptions);

// src/DeviceFrameset.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function omit(item, keys) {
  const clone = { ...item };
  for (const key of keys) {
    delete clone[key];
  }
  return clone;
}
var DeviceFrameset = React.memo(
  function DeviceFrameset2(props) {
    const { children, device, width, height, zoom, ...restProps } = props;
    const divProps = omit(restProps, ["landscape", "color"]);
    const color = "color" in props ? props.color : void 0;
    const landscape = "landscape" in props ? props.landscape : void 0;
    const style = useMemo(
      () => landscape && DeviceOptions[device].hasLandscape ? { width: height, height: width, transform: zoom !== void 0 ? `scale(${zoom})` : void 0 } : { width, height, transform: zoom !== void 0 ? `scale(${zoom})` : void 0 },
      [width, height, landscape, device, zoom]
    );
    return /* @__PURE__ */ jsxs("div", {
      className: `marvel-device ${DeviceOptions[device].device} ${color ? color : ""} ${landscape ? "landscape" : ""}`,
      ...divProps,
      style,
      children: [
        /* @__PURE__ */ jsx("div", {
          className: "inner"
        }),
        device === "Samsung Galaxy S20 Ultra" ? /* @__PURE__ */ jsx("div", {
          className: "overflow",
          children: /* @__PURE__ */ jsx("div", {
            className: "shadow"
          })
        }) : null,
        device === "iPhone XR" || device === "iPhone 12 Pro" ? /* @__PURE__ */ jsxs("div", {
          className: "notch",
          children: [
            /* @__PURE__ */ jsx("div", {
              className: "camera"
            }),
            /* @__PURE__ */ jsx("div", {
              className: "speaker"
            })
          ]
        }) : null,
        /* @__PURE__ */ jsx("div", {
          className: "top-bar"
        }),
        /* @__PURE__ */ jsx("div", {
          className: "sleep"
        }),
        /* @__PURE__ */ jsx("div", {
          className: "bottom-bar"
        }),
        /* @__PURE__ */ jsx("div", {
          className: "volume"
        }),
        /* @__PURE__ */ jsx("div", {
          className: "camera"
        }),
        /* @__PURE__ */ jsx("div", {
          className: "sensor"
        }),
        /* @__PURE__ */ jsx("div", {
          className: "speaker"
        }),
        /* @__PURE__ */ jsx("div", {
          className: "sensors"
        }),
        /* @__PURE__ */ jsx("div", {
          className: "more-sensors"
        }),
        device === "iPhone XR" || device === "iPhone 12 Pro" ? /* @__PURE__ */ jsxs("div", {
          className: "overflow",
          children: [
            /* @__PURE__ */ jsx("div", {
              className: "shadow shadow--tr"
            }),
            /* @__PURE__ */ jsx("div", {
              className: "shadow shadow--tl"
            }),
            /* @__PURE__ */ jsx("div", {
              className: "shadow shadow--br"
            }),
            /* @__PURE__ */ jsx("div", {
              className: "shadow shadow--bl"
            })
          ]
        }) : null,
        /* @__PURE__ */ jsx("div", {
          className: "inner-shadow"
        }),
        /* @__PURE__ */ jsx("div", {
          className: "screen",
          children
        }),
        /* @__PURE__ */ jsx("div", {
          className: "home"
        }),
        /* @__PURE__ */ jsx("div", {
          className: "bottom-bar"
        })
      ]
    });
  }
);

// src/DeviceSelector.tsx
import React2, { useEffect, useMemo as useMemo2, useState, useCallback } from "react";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var DeviceSelector = React2.memo(function DeviceSelector2({ children, value, onChange, banDevices = [], ...divProps }) {
  var _a;
  const deviceNames = useMemo2(() => DeviceNames.filter((devName) => !banDevices.includes(devName)), [banDevices]);
  const [deviceName, setDeviceName] = useState((_a = deviceNames[0]) != null ? _a : "");
  const selectedDeviceName = useMemo2(() => value != null ? value : deviceName, [value, deviceName]);
  const handleSelectChange = useCallback(
    (event) => {
      const newDeviceName = event.currentTarget.dataset["deviceName"];
      if (!deviceNames.includes(newDeviceName))
        throw new Error(`Invalid device name for ${newDeviceName}`);
      onChange == null ? void 0 : onChange(newDeviceName);
      setDeviceName(newDeviceName);
    },
    [deviceNames, onChange]
  );
  const [showMenu, setShowMenu] = useState(true);
  const { colors, hasLandscape, width, height } = useMemo2(() => DeviceOptions[selectedDeviceName], [selectedDeviceName]);
  const firstColor = useMemo2(() => colors[0], [colors]);
  const [selectedColor, setSelectedColor] = useState(firstColor);
  const handleColorChange = useCallback(
    (event) => {
      const newDeviceColor = event.currentTarget.dataset["deviceColor"];
      setSelectedColor(newDeviceColor);
    },
    []
  );
  useEffect(() => {
    setSelectedColor(firstColor);
  }, [firstColor]);
  const [isLandscape, setIsLandscape] = useState(void 0);
  const isLandscapeChecked = useMemo2(() => hasLandscape ? isLandscape : void 0, [hasLandscape, isLandscape]);
  const handleIsLandscapeChange = useCallback(
    () => {
      if (!hasLandscape)
        return;
      setIsLandscape((is) => !is);
    },
    [hasLandscape]
  );
  const deviceFramesetProps = useMemo2(
    () => ({
      device: selectedDeviceName,
      color: selectedColor,
      landscape: isLandscapeChecked,
      width,
      height
    }),
    [selectedDeviceName, selectedColor, isLandscapeChecked, width, height]
  );
  return /* @__PURE__ */ jsxs2("div", {
    className: "device-selector",
    ...divProps,
    children: [
      /* @__PURE__ */ jsxs2("dl", {
        children: [
          /* @__PURE__ */ jsxs2("dt", {
            children: [
              /* @__PURE__ */ jsxs2("p", {
                children: [
                  "The Chosen: ",
                  selectedDeviceName
                ]
              }),
              /* @__PURE__ */ jsx2("span", {
                className: showMenu ? "active" : "",
                onClick: () => setShowMenu((is) => !is),
                children: "show all devices"
              })
            ]
          }),
          showMenu && deviceNames.map((devName) => /* @__PURE__ */ jsxs2("dd", {
            "data-device-name": devName,
            onClick: handleSelectChange,
            className: devName === selectedDeviceName ? "active" : "",
            children: [
              /* @__PURE__ */ jsx2("input", {
                type: "radio",
                id: devName
              }),
              /* @__PURE__ */ jsxs2("label", {
                htmlFor: devName,
                children: [
                  /* @__PURE__ */ jsxs2("div", {
                    children: [
                      /* @__PURE__ */ jsx2("p", {
                        children: devName
                      }),
                      DeviceOptions[devName].hasLandscape && /* @__PURE__ */ jsx2("span", {
                        className: devName === deviceName && isLandscape ? "active" : "",
                        onClick: handleIsLandscapeChange,
                        children: "landscape"
                      })
                    ]
                  }),
                  /* @__PURE__ */ jsx2("ul", {
                    children: DeviceOptions[devName].colors.map(
                      (color) => /* @__PURE__ */ jsx2("li", {
                        title: color,
                        "data-device-color": color,
                        onClick: handleColorChange,
                        className: [devName === deviceName && color === selectedColor ? "active" : "", color].join(" ")
                      }, color)
                    )
                  })
                ]
              })
            ]
          }, devName))
        ]
      }),
      /* @__PURE__ */ jsx2("div", {
        className: "device-selector-container",
        children: children(deviceFramesetProps)
      })
    ]
  });
});

// src/DeviceEmulator.tsx
import React3, { useCallback as useCallback2, useEffect as useEffect2, useMemo as useMemo3, useState as useState2 } from "react";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var zooms = [
  0.5,
  0.75,
  1,
  1.25,
  1.5
];
var DeviceEmulator = React3.memo(function DeviceEmulator2({ children, value, onChange, banDevices = [], ...divProps }) {
  var _a;
  const deviceNames = useMemo3(() => DeviceNames.filter((devName) => !banDevices.includes(devName)), [banDevices]);
  const [deviceName, setDeviceName] = useState2((_a = deviceNames[0]) != null ? _a : "");
  const selectedDeviceName = useMemo3(() => {
    var _a2;
    return (_a2 = value == null ? void 0 : value.device) != null ? _a2 : deviceName;
  }, [value, deviceName]);
  const handleSelectChange = useCallback2(
    (event) => {
      const newDeviceName = event.target.value;
      if (!deviceNames.includes(newDeviceName))
        throw new Error(`Invalid device name for ${newDeviceName}`);
      setDeviceName(newDeviceName);
    },
    [deviceNames]
  );
  const [selectedZoom, setSelectedZoom] = useState2(zooms[2]);
  const handleSelectZoomChange = useCallback2(
    (event) => {
      const newZoom = +event.target.value;
      if (!zooms.includes(newZoom))
        throw new Error(`Invalid device zoom for ${newZoom}`);
      setSelectedZoom(newZoom);
    },
    []
  );
  const { colors, hasLandscape, width, height } = useMemo3(() => DeviceOptions[selectedDeviceName], [selectedDeviceName]);
  const firstColor = useMemo3(() => colors[0], [colors]);
  const [isLandscape, setIsLandscape] = useState2(void 0);
  const isLandscapeChecked = useMemo3(() => hasLandscape ? isLandscape : void 0, [hasLandscape, isLandscape]);
  const handleIsLandscapeChange = useCallback2(
    () => {
      if (!hasLandscape)
        return;
      setIsLandscape((is) => !is);
    },
    [hasLandscape]
  );
  const deviceFramesetProps = useMemo3(
    () => value != null ? value : {
      device: selectedDeviceName,
      color: firstColor,
      landscape: isLandscapeChecked,
      width,
      height,
      zoom: selectedZoom
    },
    [value, selectedDeviceName, firstColor, isLandscapeChecked, width, height, selectedZoom]
  );
  useEffect2(
    () => {
      onChange == null ? void 0 : onChange(deviceFramesetProps);
    },
    [onChange, deviceFramesetProps]
  );
  return /* @__PURE__ */ jsxs3("div", {
    className: "device-emulator",
    ...divProps,
    children: [
      /* @__PURE__ */ jsxs3("section", {
        children: [
          /* @__PURE__ */ jsx3("select", {
            value: selectedDeviceName,
            onChange: handleSelectChange,
            children: deviceNames.map((devName) => /* @__PURE__ */ jsx3("option", {
              value: devName,
              children: devName
            }, devName))
          }),
          /* @__PURE__ */ jsx3("input", {
            disabled: true,
            value: width
          }),
          /* @__PURE__ */ jsx3("span", {
            children: "x"
          }),
          /* @__PURE__ */ jsx3("input", {
            disabled: true,
            value: height
          }),
          /* @__PURE__ */ jsx3("select", {
            value: selectedZoom,
            onChange: handleSelectZoomChange,
            children: zooms.map((zoom) => /* @__PURE__ */ jsxs3("option", {
              value: zoom,
              children: [
                zoom * 100,
                "%"
              ]
            }, zoom))
          }),
          /* @__PURE__ */ jsx3("label", {
            children: "Landscape:"
          }),
          /* @__PURE__ */ jsx3("input", {
            type: "checkbox",
            checked: !!isLandscapeChecked,
            disabled: !hasLandscape,
            onChange: handleIsLandscapeChange
          })
        ]
      }),
      /* @__PURE__ */ jsx3("div", {
        className: "device-emulator-container",
        children: children(deviceFramesetProps)
      })
    ]
  });
});

// src/Zoomable.tsx
import React4, { useEffect as useEffect3, useMemo as useMemo4, useState as useState3 } from "react";
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
var steps = [
  0,
  1 / 4,
  1 / 3,
  1 / 2,
  2 / 3,
  3 / 4,
  4 / 5,
  9 / 10,
  1,
  11 / 10,
  5 / 4,
  3 / 2,
  7 / 4,
  2 / 1,
  5 / 2,
  3 / 1,
  4 / 1,
  5 / 1,
  Infinity
];
var toCurrIndex = (value) => steps.findIndex((step) => step > value) - 1;
var toPrevIndex = (value) => steps.findIndex((step) => step > value) - 2;
var toNextIndex = (value) => steps.findIndex((step) => step > value);
var checkReachBound = (value) => {
  if (value === steps[0])
    return steps[1];
  if (value === steps[steps.length - 1])
    return steps[steps.length - 2];
  return value;
};
var toCurr = (value) => {
  return checkReachBound(steps[toCurrIndex(value)]);
};
var toPrev = (value) => {
  return checkReachBound(steps[toPrevIndex(value)]);
};
var toNext = (value) => {
  return checkReachBound(steps[toNextIndex(value)]);
};
var Zoomable = React4.memo(function Zoomable2({
  children,
  ...props
}) {
  const [[width, height], setSize] = useState3([1, 1]);
  const [[clientWidth, clientHeight], setClientSize] = useState3([width, height]);
  const [container, setContainer] = useState3(null);
  const [zoomContainer, setZoomContainer] = useState3(
    null
  );
  const scale = useMemo4(() => {
    const [scaleX, scaleY] = [width / clientWidth, height / clientHeight];
    return Math.min(scaleX, scaleY, 1);
  }, [width, height, clientWidth, clientHeight]);
  const [localScale, setLocaleScale] = useState3(null);
  const realScale = useMemo4(
    () => toCurr(localScale != null ? localScale : scale),
    [localScale, scale]
  );
  const allowScroll = useMemo4(
    () => clientWidth / realScale < width || clientHeight / realScale < height,
    [clientHeight, clientWidth, realScale, width, height]
  );
  const transformStyle = useMemo4(() => {
    return { transform: `scale(${realScale})` };
  }, [realScale]);
  useEffect3(() => {
    if (zoomContainer) {
      const syncClientSize = (el) => {
        const { clientWidth: clientWidth2, clientHeight: clientHeight2 } = el;
        clientWidth2 && clientHeight2 && setClientSize([clientWidth2, clientHeight2]);
      };
      syncClientSize(zoomContainer);
      const option = {};
      const observe = (entries) => {
        for (const entry of entries) {
          syncClientSize(entry.target);
        }
      };
      const observer = new ResizeObserver(observe);
      observer.observe(zoomContainer, option);
      return () => observer.disconnect();
    }
  }, [zoomContainer]);
  useEffect3(() => {
    if (container) {
      const { clientWidth: clientWidth2, clientHeight: clientHeight2 } = container;
      setSize([clientWidth2, clientHeight2]);
    }
  }, [container]);
  return /* @__PURE__ */ jsxs4("div", {
    ...props,
    style: { ...props.style, position: "relative" },
    children: [
      /* @__PURE__ */ jsx4("div", {
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: allowScroll ? "auto" : "hidden"
        },
        ref: setContainer,
        children: /* @__PURE__ */ jsx4("div", {
          ref: setZoomContainer,
          style: { transformOrigin: "center", ...transformStyle },
          children
        })
      }),
      /* @__PURE__ */ jsxs4("div", {
        style: { position: "absolute", right: "16px", top: "16px" },
        children: [
          /* @__PURE__ */ jsx4("span", {
            onClick: () => setLocaleScale(toPrev(realScale)),
            children: "-"
          }),
          Math.round(realScale * 100),
          "%",
          /* @__PURE__ */ jsx4("span", {
            onClick: () => setLocaleScale(toNext(realScale)),
            children: "+"
          })
        ]
      })
    ]
  });
});
export {
  DeviceEmulator,
  DeviceFrameset,
  DeviceOptions,
  DeviceSelector,
  Zoomable
};
