import { useRef, useState } from 'react';
import { Animated } from 'react-native';
import SpringAnimationConfig = Animated.SpringAnimationConfig;
import TimingAnimationConfig = Animated.TimingAnimationConfig;
import DecayAnimationConfig = Animated.DecayAnimationConfig;

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

interface IUseAnimatedTimingHook<T> extends IUseAnimatedValueHook<T> {
    animateToStart: (config: TimingAnimationConfig) => void,
    animateToEnd: (config: TimingAnimationConfig) => void,
}

const useAnimatedTiming = <T = string | number>(start: T, end: T): IUseAnimatedTimingHook<T> => {
    const animatedValueData = useAnimatedValue<T>(start, end);

    return {
        animateToStart: (config: TimingAnimationConfig) => {
            Animated.timing(animatedValueData.isAnimatedToEnd, { ...config, toValue: 0 }).start();
        },
        animateToEnd: (config: TimingAnimationConfig) => {
            Animated.timing(animatedValueData.isAnimatedToEnd, { ...config, toValue: 1 }).start();
        },
        ...animatedValueData,
    }
};

interface IUseAnimatedSpringHook<T> extends IUseAnimatedValueHook<T> {
    animateToStart: (config: SpringAnimationConfig) => void,
    animateToEnd: (config: SpringAnimationConfig) => void,
}

const useAnimatedSpring = <T = string | number>(start: T, end: T): IUseAnimatedSpringHook<T> => {
    const animatedValueData = useAnimatedValue<T>(start, end);

    return {
        animateToStart: (config: SpringAnimationConfig) => {
            Animated.spring(animatedValueData.isAnimatedToEnd, {...config, toValue: 0}).start();
        },
        animateToEnd: (config: SpringAnimationConfig) => {
            Animated.spring(animatedValueData.isAnimatedToEnd, {...config, toValue: 1}).start();
        },
        ...animatedValueData,
    }
};

interface IUseAnimatedDecayHook<T> extends IUseAnimatedValueHook<T> {
    animateToStart: (config: DecayAnimationConfig) => void,
    animateToEnd: (config: DecayAnimationConfig) => void,
}

const useAnimatedDecay = <T = string | number>(start: T, end: T): IUseAnimatedDecayHook<T> => {
    const animatedValueData = useAnimatedValue<T>(start, end);

    return {
        animateToStart: (config: DecayAnimationConfig) => {
            Animated.spring(animatedValueData.isAnimatedToEnd, {...config, toValue: 0}).start();
        },
        animateToEnd: (config: DecayAnimationConfig) => {
            Animated.spring(animatedValueData.isAnimatedToEnd, {...config, toValue: 1}).start();
        },
        ...animatedValueData,
    }
};

//TODO: Add other methods
