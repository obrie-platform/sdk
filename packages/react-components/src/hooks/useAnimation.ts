import {Animation, AnimationStatus} from "@obrie/sdk";

export const useAnimation = (): Animation<number> => {
    const ref = 1;

    return {
        ref,

        addStatusListener(callback: (status: AnimationStatus) => any): any {
        },

        removeStatusListener(callback: (status: AnimationStatus) => any): any {
        },

        status: null,
        value: 0,
        bridgeValue: {
            bridge: true,
            ref: ref,
            type: "animationValue",
            payload: null
        }
    }
}