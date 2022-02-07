import { cleanup, renderHook, act } from '@testing-library/react-hooks'
import { useTimeout } from './useTimeout'

const callback = jest.fn()

describe('use timeout', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    cleanup()
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
  })

  it('executes callback with a delay', () => {
    renderHook(() => useTimeout(callback, 200))
    jest.runAllTimers()
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('clears a timer', () => {
    const { result } = renderHook(() => useTimeout(callback, 200))

    act(() => result.current.clear())
    jest.runAllTimers()

    expect(callback).not.toHaveBeenCalled()
  })

  it('resets a timer', () => {
    const { result } = renderHook(() => useTimeout(callback, 200))

    jest.runAllTimers()
    act(() => result.current.reset())
    jest.runAllTimers()

    expect(callback).toHaveBeenCalledTimes(2)
  })
})
