import React, { useCallback, useContext, useState } from 'react';
import { QuizContext } from '../../layouts/Main';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Sector, Cell, BarChart, Bar, Label } from 'recharts';


const Statistics = () => {
    const course = useContext(QuizContext);
    return (
        <div className='max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto mt-20 mb-40'>
            <h2 className='text-center text-3xl font-semibold text-indigo-500 border-b-4 border-indigo-500 pb-2 w-48 mx-auto'>Quiz Analysis</h2>
            <div className='mt-20'>
                <ResponsiveContainer width="100%" height={600}>
                    <LineChart
                    width={500}
                    height={300}
                    data={course}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" >
                    </XAxis>
                    <YAxis label={{ value: 'Questions', angle: -90, position: 'insideLeft', textAnchor: 'middle' }} />
                    <Tooltip />
                    <Line type="monotone" dataKey="total" stroke="#6366f1" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div className='mt-40'>
                <ResponsiveContainer width="95%" height={600}>
                    <BarChart
                    width={500}
                    height={300}
                    data={course}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name">
                    </XAxis>
                    <YAxis label={{ value: 'Questions', angle: -90, position: 'insideLeft', textAnchor: 'middle' }} />
                    <Tooltip />
                    <Bar dataKey="total" fill="#6366f1" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div style={{ width: '100%', height: 300 }} className='mt-40'>
              <ResponsiveContainer>
                <PieChart>
                  <Pie dataKey="total" data={course} fill="#8884d8" label />
                </PieChart>
              </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;