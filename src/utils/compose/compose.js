const compose = (...callers) => (c) => callers.reduce((enhancedC, caller) => caller(enhancedC), c);

export default compose;
