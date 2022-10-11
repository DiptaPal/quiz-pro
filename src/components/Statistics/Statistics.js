import React, { useContext } from 'react';
import { QuizContext } from '../../layouts/Main';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Sector, Cell, BarChart, Bar, } from 'recharts';



    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
    };

const Statistics = () => {
    const courses = useContext(QuizContext);
    const totalQuestion = courses;
    return (
        <div className='max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto mt-20 mb-40'>
            <h2 className='text-center text-3xl font-semibold text-indigo-500 border-b-4 border-indigo-500 pb-2 w-48 mx-auto'>Quiz Analysis</h2>
            <div className='mt-20'>
                <ResponsiveContainer width="95%" height={400}>
                    <LineChart
                    width={500}
                    height={300}
                    data={totalQuestion}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="total" stroke="#6366f1" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div className='mt-40'>
                <ResponsiveContainer width="95%" height={400}>
                    <BarChart
                    width={500}
                    height={300}
                    data={totalQuestion}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="total" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            
        </div>
    );
};

export default Statistics;