import React$1 from 'react';

declare type KeysOfType<T, F> = {
    [key in keyof T]: [F] extends [T[key]] ? [T[key]] extends [F] ? key : never : never;
}[keyof T];
declare type KeysOfSubType<T, F> = {
    [key in keyof T]: [F] extends [T[key]] ? key : never;
}[keyof T];
declare type OmitFieldByType<T, F> = Omit<T, KeysOfType<T, F>>;
declare type OptionField<T> = Omit<T, KeysOfSubType<T, undefined>> & Partial<Pick<T, KeysOfSubType<T, undefined>>>;
declare type Compute<A> = {
    [K in keyof A]: A[K];
} & unknown;

declare type DeviceType<Device extends string, Colors extends readonly string[]> = {
    device: Device;
    colors: Colors;
    hasLandscape: boolean;
    width?: number;
    height?: number;
};
declare const DeviceOptions: {
    "iPhone SE": {
        device: "iphone8";
        colors: readonly [];
        hasLandscape: true;
        width: number;
        height: number;
    };
    "iPhone XR": {
        device: "iphone-x";
        colors: readonly [];
        hasLandscape: true;
        width: number;
        height: number;
    };
    "iPhone 12 Pro": {
        device: "iphone-x";
        colors: readonly [];
        hasLandscape: true;
        width: number;
        height: number;
    };
    "Pixel 5": {
        device: "nexus5";
        colors: readonly [];
        hasLandscape: true;
        width: number;
        height: number;
    };
    "Samsung Galaxy S8+": {
        device: "note8";
        colors: readonly [];
        hasLandscape: true;
        width: number;
        height: number;
    };
    "Samsung Galaxy S20 Ultra": {
        device: "note8";
        colors: readonly [];
        hasLandscape: true;
        width: number;
        height: number;
    };
    "iPad Air": {
        device: "ipad";
        colors: readonly ["black", "silver"];
        hasLandscape: true;
        width: number;
        height: number;
    };
    "iPad Mini": {
        device: "ipad";
        colors: readonly ["black", "silver"];
        hasLandscape: true;
        width: number;
        height: number;
    };
    "Surface Pro 7": {
        device: "ipad";
        colors: readonly ["black", "silver"];
        hasLandscape: true;
        width: number;
        height: number;
    };
    "Surface Duo": {
        device: "ipad";
        colors: readonly ["black", "silver"];
        hasLandscape: true;
        width: number;
        height: number;
    };
    "Galaxy Fold": {
        device: "note8";
        colors: readonly ["black", "silver"];
        hasLandscape: true;
        width: number;
        height: number;
    };
    "Samsung Galaxy A51/71": {
        device: "note8";
        colors: readonly ["black", "silver"];
        hasLandscape: true;
        width: number;
        height: number;
    };
    "Nest Hub": {
        device: "ipad";
        colors: readonly ["black", "silver"];
        hasLandscape: true;
        width: number;
        height: number;
    };
    "Nest Hub Max": {
        device: "ipad";
        colors: readonly ["black", "silver"];
        hasLandscape: true;
        width: number;
        height: number;
    };
};
declare type DeviceName = keyof typeof DeviceOptions;
declare type DevicesType<R extends Record<string, DeviceType<string, readonly string[]>>> = {
    [key in keyof R]: Compute<OptionField<OmitFieldByType<{
        device: key;
        color: R[key]['colors'][number];
        landscape: R[key]['hasLandscape'] extends true ? (boolean | undefined) : never;
        width?: number;
        height?: number;
        zoom?: number;
    }, never>>>;
}[keyof R];
declare type DeviceFramesetProps = DevicesType<typeof DeviceOptions> & React.HTMLAttributes<HTMLDivElement>;

declare const DeviceFrameset: React$1.NamedExoticComponent<DeviceFramesetProps>;

declare type DeviceSelectorProps = React$1.HTMLAttributes<HTMLDivElement> & {
    banDevices?: DeviceName[];
    children: (props: DeviceFramesetProps) => React$1.ReactNode;
    value?: DeviceName;
    onChange?: (deviceName: DeviceName) => void;
};
declare const DeviceSelector: React$1.NamedExoticComponent<DeviceSelectorProps>;

declare type DeviceEmulatorProps = React$1.HTMLAttributes<HTMLDivElement> & {
    banDevices?: DeviceName[];
    children: (props: DeviceFramesetProps) => React$1.ReactNode;
    value?: DeviceFramesetProps;
    onChange?: (deviceConfig: DeviceFramesetProps) => void;
};
declare const DeviceEmulator: React$1.NamedExoticComponent<DeviceEmulatorProps>;

declare type ZoomableType = React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
declare const Zoomable: React$1.NamedExoticComponent<ZoomableType>;

export { DeviceEmulator, DeviceEmulatorProps, DeviceFrameset, DeviceFramesetProps, DeviceOptions, DeviceSelector, DeviceSelectorProps, Zoomable, ZoomableType };
