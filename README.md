# Firebase onAuthStateChanged Unsubscribe Issue

This repository demonstrates a common issue with Firebase's `onAuthStateChanged` listener: the inability to effectively unsubscribe, resulting in memory leaks.  The provided code showcases the problem and its solution.

## Problem

The `onAuthStateChanged` listener continuously runs, even after it's no longer required. This is due to the absence of a proper call to the `unsubscribe()` function, leading to excessive memory consumption and potential application instability.

## Solution

The solution involves correctly calling the `unsubscribe()` function when the listener is no longer needed.  This ensures that the listener is detached and prevents memory leaks.