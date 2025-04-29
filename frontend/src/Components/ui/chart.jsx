"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const ChartContext = React.createContext({})

const ChartContainer = React.forwardRef(({ config, className, children, ...props }, ref) => {
  const configRef = React.useRef(config)

  // Create CSS variables for each color in the config
  const style = React.useMemo(() => {
    const style = {}
    Object.entries(config).forEach(([key, value]) => {
      if (value.color) {
        style[`--color-${key}`] = value.color
      }
    })
    return style
  }, [config])

  return (
    <ChartContext.Provider value={{ config: configRef.current }}>
      <div ref={ref} className={cn("recharts-wrapper", className)} style={style} {...props}>
        {children}
      </div>
    </ChartContext.Provider>
  )
})
ChartContainer.displayName = "ChartContainer"

const ChartTooltip = ({ className, ...props }) => {
  return <tooltip className={cn("", className)} {...props} />
}

const ChartTooltipContent = React.forwardRef(
  ({ className, indicator = "line", labelFormatter, formatter, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("rounded-lg border bg-background p-2 shadow-md", className)} {...props}>
        {props.payload?.length > 0 && (
          <div className="flex flex-col gap-0.5">
            <div className="text-xs font-medium">{labelFormatter ? labelFormatter(props.label) : props.label}</div>
            <div className="flex flex-col gap-1">
              {props.payload.map((entry, index) => {
                const { color, value, name, dataKey } = entry
                const formattedValue = formatter ? formatter(value, name, entry, index) : value
                const { config } = React.useContext(ChartContext)
                const label = config[dataKey]?.label || name

                return (
                  <div key={`item-${index}`} className="flex items-center gap-1 text-xs">
                    {indicator === "dot" && <div className="size-2 rounded-full" style={{ backgroundColor: color }} />}
                    {indicator === "line" && <div className="h-0.5 w-3" style={{ backgroundColor: color }} />}
                    {indicator === "dashed" && (
                      <div className="h-0.5 w-3 border-b-2" style={{ borderColor: color, borderStyle: "dashed" }} />
                    )}
                    <span className="text-muted-foreground">{label}:</span>
                    <span className="font-medium">{formattedValue}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    )
  },
)
ChartTooltipContent.displayName = "ChartTooltipContent"

export { ChartContainer, ChartTooltip, ChartTooltipContent }

export const ChartConfig = {}
