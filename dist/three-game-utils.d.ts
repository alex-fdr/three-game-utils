import { Object3D } from 'three';
import { Vector3 } from 'three';
import { Vector3Like } from 'three';

export declare function applyTransform(target: Object3D, props?: TransformProps): void;

export declare function getObjectSize(target: Object3D): Vector3;

export declare function getScreenSize(base?: number): {
    width: number;
    height: number;
};

export declare function throttleTrailing(callback: Function, limit: number): (...args: any[]) => void;

export declare interface TransformProps {
    position?: Partial<Vector3Like>;
    rotation?: Partial<Vector3Like>;
    scale?: Partial<Vector3Like>;
    scaleFactor?: number;
}

export { }
