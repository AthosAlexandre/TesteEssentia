import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

const TopToastContext = createContext(null)

const TOAST_DURATION_MS = 2600

export function useTopToast() {
  const ctx = useContext(TopToastContext)
  if (!ctx) {
    throw new Error('useTopToast deve ser usado dentro de TopToastProvider')
  }
  return ctx
}

function TopToastHost({ message, toastKey }) {
  const reduce = useReducedMotion()

  const shell = (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[110] flex justify-center px-4 pt-[calc(4.75rem+0.75rem)] md:pt-[calc(5.25rem+0.75rem)]"
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence mode="wait">
        {message != null && message !== '' && (
          <motion.div
            key={toastKey}
            role="status"
            initial={
              reduce
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: -12, scale: 0.98 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={
              reduce
                ? { opacity: 0, transition: { duration: 0.12 } }
                : { opacity: 0, y: -8, scale: 0.98 }
            }
            transition={{ duration: reduce ? 0.12 : 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto max-w-md rounded-lg border border-stone-200/90 bg-white px-4 py-3 text-center font-nav text-sm font-medium text-stone-900 shadow-lg shadow-stone-900/10"
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )

  if (typeof document === 'undefined') {
    return null
  }

  return createPortal(shell, document.body)
}

export function TopToastProvider({ children }) {
  const [message, setMessage] = useState(null)
  const [toastKey, setToastKey] = useState(0)
  const hideTimerRef = useRef(null)

  const showToast = useCallback((text) => {
    const next = typeof text === 'string' && text.trim() ? text.trim() : 'Ação registrada (simulação).'
    if (hideTimerRef.current) {
      window.clearTimeout(hideTimerRef.current)
      hideTimerRef.current = null
    }
    setToastKey((k) => k + 1)
    setMessage(next)
    hideTimerRef.current = window.setTimeout(() => {
      setMessage(null)
      hideTimerRef.current = null
    }, TOAST_DURATION_MS)
  }, [])

  useEffect(() => {
    return () => {
      if (hideTimerRef.current) window.clearTimeout(hideTimerRef.current)
    }
  }, [])

  const value = useMemo(() => ({ showToast }), [showToast])

  return (
    <TopToastContext.Provider value={value}>
      {children}
      <TopToastHost message={message} toastKey={toastKey} />
    </TopToastContext.Provider>
  )
}
