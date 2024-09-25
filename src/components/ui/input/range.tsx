import { useEffect, useRef, useState } from 'react'
import { useThumbOverlap, Range, getTrackBackground } from 'react-range'

const STEP = 0.1
const MIN = 0
const MAX = 10000
const COLORS = ['#e4e4e7', '#18181b', '#e4e4e7']
const THUMB_SIZE = 24

type ThumbLabeProps = {
  rangeRef: Range | null
  values: number[]
  index: number
  isDragged: boolean
}

type RangeProps = {
  values: number[]
  rtl?: boolean
  onChange: (values: number[]) => void
}

function ThumbLabel({ rangeRef, values, index, isDragged }: ThumbLabeProps) {
  const [labelValue, style] = useThumbOverlap(rangeRef, values, index)
  return (
    <div
      data-label={index}
      style={{
        display: 'block',
        opacity: isDragged ? '100%' : 0,
        position: 'absolute',
        top: '-28px',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '12px',
        fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
        padding: '4px',
        borderRadius: '4px',
        backgroundColor: '#18181b',
        whiteSpace: 'nowrap',
        ...(style as React.CSSProperties),
      }}
    >
      {labelValue as string}
    </div>
  )
}

export function CustomRange({ values, onChange, rtl }: RangeProps) {
  const rangeRef = useRef<Range | null>(null)
  const [currentValue, setCurrentValues] = useState(values)

  useEffect(() => {
    setCurrentValues(values)
  }, [values])

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Range
        allowOverlap
        values={currentValue}
        ref={rangeRef}
        step={STEP}
        min={MIN}
        max={MAX}
        onFinalChange={(values) => onChange(values)}
        rtl={rtl}
        onChange={(values) => setCurrentValues(values)}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: '36px',
              display: 'flex',
              width: '100%',
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: '5px',
                width: '100%',
                borderRadius: '4px',
                background: getTrackBackground({
                  values: currentValue,
                  colors: COLORS,
                  min: MIN,
                  max: MAX,
                  rtl,
                }),
                alignSelf: 'center',
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, index, isDragged }) => {
          return (
            <div
              {...props}
              key={props.key}
              style={{
                ...props.style,
                height: `${THUMB_SIZE}px`,
                width: `${THUMB_SIZE}px`,
                borderRadius: '4px',
                backgroundColor: '#FFF',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0px 2px 6px #e4e4e7',
              }}
            >
              <ThumbLabel
                rangeRef={rangeRef.current}
                values={currentValue}
                index={index}
                isDragged={isDragged}
              />
              <div
                style={{
                  height: '16px',
                  width: '5px',
                  backgroundColor: isDragged ? '#18181b' : '#CCC',
                }}
              />
            </div>
          )
        }}
      />
    </div>
  )
}
