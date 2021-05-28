import { useRef, useState } from 'react';
import { Animated } from 'react-native';

interface IAvailableInterpolatedValue {
    toValue: 0 | 1,
}

interface IUseAnimatedValueHook<T> {
    isAnimatedToEnd: Animated.Value,
    current: Animated.AnimatedInterpolation;
    setStartValue: (value: T) => void;
    setEndValue: (value: T) => void;
}

const useAnimatedValue = <T = string | number>(start: T, end: T): IUseAnimatedValueHook<T> => {
    const isAnimatedToEnd = useRef(new Animated.Value(0)).current;
    const [startValue, setStartValue] = useState<T>(start);
    const [endValue, setEndValue] = useState<T>(end);

    return {
        isAnimatedToEnd,
        setStartValue,
        setEndValue,
        current: isAnimatedToEnd.interpolate({
            inputRange: [0, 1],
            // @ts-ignore
            outputRange: [startValue, endValue],
        }),
    }
};

type ITimingAnimationConfig = Animated.TimingAnimationConfig & IAvailableInterpolatedValue;

interface IUseAnimatedTimingHook<T> extends IUseAnimatedValueHook<T> {
    animate: (config: ITimingAnimationConfig) => void;
}

export const useAnimatedTiming = <T = string | number>(start: T, end: T): IUseAnimatedTimingHook<T> => {
    const animatedValueData = useAnimatedValue<T>(start, end);

    return {
        animate: (config: ITimingAnimationConfig) => {
            Animated.timing(animatedValueData.isAnimatedToEnd, config).start();
        },
      ...animatedValueData,
    }
};

type ISpringAnimationConfig = Animated.SpringAnimationConfig & IAvailableInterpolatedValue;

interface IUseAnimatedSpringHook<T> extends IUseAnimatedValueHook<T> {
    animate: (config: ISpringAnimationConfig) => void;
}

export const useAnimatedSpring = <T = string | number>(start: T, end: T): IUseAnimatedSpringHook<T> => {
    const animatedValueData = useAnimatedValue<T>(start, end);

    return {
        animate: (config: ISpringAnimationConfig) => {
            Animated.spring(animatedValueData.isAnimatedToEnd, config).start();
        },
        ...animatedValueData,
    }
};

type IDecayAnimationConfig = Animated.DecayAnimationConfig & IAvailableInterpolatedValue

interface IUseAnimatedDecayHook<T> extends IUseAnimatedValueHook<T> {
    animate: (config: IDecayAnimationConfig) => void,
}

export const useAnimatedDecay = <T = string | number>(start: T, end: T): IUseAnimatedDecayHook<T> => {
    const animatedValueData = useAnimatedValue<T>(start, end);

    return {
        animate: (config: IDecayAnimationConfig) => {
            Animated.spring(animatedValueData.isAnimatedToEnd, config).start();
        },
        ...animatedValueData,
    }
};

//TODO: Add other methods
