import type { Compute, OptionField, OmitFieldByType } from './helper'

type DeviceType<Device extends string, Colors extends readonly string[]> = {
    device: Device,
    colors: Colors,
    hasLandscape: boolean,
    width?: number,
    height?: number,
}

export const defineDevice = <
    Device extends string,
    Colors extends readonly string[],
    Def extends DeviceType<Device, Colors>
>(definition: Def) => definition

export const DeviceOptions = {
    ['Nest Hub Max']: defineDevice({
        device: 'ipad',
        colors: ['black', 'silver'] as const,
        hasLandscape: true,
		width: 1280,
		height: 800,
    }),
    ['Nest Hub']: defineDevice({
        device: 'ipad',
        colors: ['black', 'silver'] as const,
        hasLandscape: true,
		width: 1024,
		height: 600,
    }),
    ['Samsung Galaxy A51/71']: defineDevice({
        device: 'note8',
        colors: ['black', 'silver'] as const,
        hasLandscape: true,
		width: 412,
		height: 914,
    }),
    ['Galaxy Fold']: defineDevice({
        device: 'note8',
        colors: ['black', 'silver'] as const,
        hasLandscape: true,
		width: 280,
		height: 653,
    }),
    ['Surface Duo']: defineDevice({
        device: 'ipad',
        colors: ['black', 'silver'] as const,
        hasLandscape: true,
		width: 540,
		height: 720,
    }),
    ['Surface Pro 7']: defineDevice({
        device: 'ipad',
        colors: ['black', 'silver'] as const,
        hasLandscape: true,
		width: 912,
		height: 1368,
    }),
    ['iPad Mini']: defineDevice({
        device: 'ipad',
        colors: ['black', 'silver'] as const,
        hasLandscape: true,
		width: 768,
		height: 1024,
    }),
    ['iPad Air']: defineDevice({
        device: 'ipad',
        colors: ['black', 'silver'] as const,
        hasLandscape: true,
		width: 820,
		height: 1180,
    }),
    ['Samsung Galaxy S20 Ultra']: defineDevice({
        device: 'note8',
        colors: [] as const,
        hasLandscape: true,
		width: 412,
		height: 915,
    }),
    ['Samsung Galaxy S8+']: defineDevice({
        device: 'note8',
        colors: [] as const,
        hasLandscape: true,
		width: 360,
		height: 740,
    }),
    ['Pixel 5']: defineDevice({
        device: 'nexus5',
        colors: [] as const,
        hasLandscape: true,
		width: 393,
		height: 851,
    }),
    ['iPhone 12 Pro']: defineDevice({
        device: 'iphone-x',
        colors: [] as const,
        hasLandscape: true,
		width: 390,
		height: 844,
    }),
    ['iPhone XR']: defineDevice({
        device: 'iphone-x',
        colors: [] as const,
        hasLandscape: true,
		width: 414,
		height: 896,
    }),
    ['iPhone SE']: defineDevice({
        device: 'iphone8',
        colors: [] as const,
        hasLandscape: true,
		width: 375,
		height: 667,
    }),
}

export type DeviceName = keyof typeof DeviceOptions

export const DeviceNames = Object.keys(DeviceOptions) as DeviceName[]

type DevicesType<R extends Record<string, DeviceType<string, readonly string[]>>> = {
    [key in keyof R]: Compute<OptionField<OmitFieldByType<{
        device: key,
        color: R[key]['colors'][number],
        landscape: R[key]['hasLandscape'] extends true ? (boolean | undefined) : never
        width?: number,
        height?: number,
        zoom?: number,
    }, never>>>
}[keyof R]

export type DeviceFramesetProps = DevicesType<typeof DeviceOptions> & React.HTMLAttributes<HTMLDivElement>
