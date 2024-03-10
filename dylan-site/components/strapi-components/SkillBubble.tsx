import { useEffect, useMemo, useRef } from 'react'
import { useTheme } from "next-themes";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

// Import the additional modules you need
require('highcharts/highcharts-more.js')(Highcharts);



export default function SkillBubble(content: any, chart: HighchartsReact.Props) {
    const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

    const { systemTheme, theme, setTheme } = useTheme();

    const updatedTheme = useMemo(() => {
        if (theme === 'system') {
            return systemTheme;
        } else {
            return theme;
        }
    }, [systemTheme, theme])

    const options = {
        chart: {
            type: 'packedbubble',
            inverted: true,
            backgroundColor: 'transparent',
            height: '50%',
        },
        credits: {
            enabled: false
        },
        title: {
            text: undefined,
        },
        subtitle: {
            text: "The bigger the bubble, the more I know about it",
            align: 'left',
        },
        legend: {
            enabled: false
        },
        tooltip: {
            useHTML: true,
            pointFormat: '{point.name}',
            backgroundColor: updatedTheme === 'dark' ? '#000' : '#fff',
            style: {
                color: updatedTheme === 'dark' ? 'White' : 'black'
            }
        },
        plotOptions: {
            packedbubble: {
                minSize: '50%',
                maxSize: '120%',
                yMax: 800,
                zMax: 800,
                layoutAlgorithm: {
                    splitSeries: false,
                    gravitationalConstant: 0.02,
                    bubblePadding: 10,
                },
                dataLabels: {
                    enabled: true,
                    format: '{point.name}',
                    style: {
                        color: updatedTheme === 'dark' ? 'white' : 'black',
                        fontSize: '12px',
                        textOutline: 'none',

                    }
                },
                marker: {
                    fillColor: 'transparent',
                    lineColor: '#0292F2'
                },
                states: {
                    hover: {
                        halo: {
                            size: 2, // Adjust the size of the halo
                            opacity: 0.8 // Adjust the opacity of the halo
                        },
                        lineWidth: 0, // Adjust the width of the border
                    }
                }
            }
        },
        series: [{
            type: 'packedbubble', // Specify the type of the series
            color: '#0292F2',
            name: 'Skills',
            data: content.content.skills.data
        }]
    } as Highcharts.Options

    useEffect(() => {
        if (chartComponentRef.current) {
            chartComponentRef.current.chart?.update({
                plotOptions: {
                    packedbubble: {
                        dataLabels: {
                            style: {
                                color: updatedTheme === 'dark' ? 'white' : 'black',
                            }
                        },
                        marker: {
                            lineColor: '#0292F2'
                        }
                    }
                }
            }, true, true)
        }
    }, [systemTheme, theme, updatedTheme])



    return (
        <div className='max-w-[1290px] m-auto px-5'>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
                ref={chartComponentRef}
                {...chart}
            />
        </div>
    )
}