import React from 'react';
import { FilterState } from '../types';
import { Search, RotateCcw, Download } from 'lucide-react';

interface FilterBarProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  onSearch: () => void;
  onReset: () => void;
  onExport: () => void;
  collapsed: boolean;
}

const InputGroup: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div className="flex items-center gap-2 mb-3">
    <label className="text-gray-600 text-sm whitespace-nowrap min-w-[60px] text-right">{label}</label>
    {children}
  </div>
);

export const FilterBar: React.FC<FilterBarProps> = ({ filters, setFilters, onSearch, onReset, onExport, collapsed }) => {
  const handleChange = (field: keyof FilterState, value: string) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  if (collapsed) return null;

  return (
    <div className="bg-white p-4 pb-0">
      <div className="flex flex-wrap gap-x-6 gap-y-1">
        
        {/* Date Range */}
        <InputGroup label="申请时间">
          <div className="flex items-center gap-1">
             <div className="relative">
                <input 
                  type="text" 
                  placeholder="开始日期"
                  className="border border-gray-300 rounded px-2 py-1 text-sm w-32 focus:outline-none focus:border-blue-500 text-gray-500"
                  value={filters.startDate}
                  onChange={(e) => handleChange('startDate', e.target.value)}
                />
             </div>
             <span className="text-gray-400 text-sm">至</span>
             <input 
                type="text" 
                placeholder="结束日期"
                className="border border-gray-300 rounded px-2 py-1 text-sm w-32 focus:outline-none focus:border-blue-500 text-gray-500"
                value={filters.endDate}
                onChange={(e) => handleChange('endDate', e.target.value)}
              />
          </div>
        </InputGroup>

        {/* Dispatcher */}
        <InputGroup label="派单员">
          <input 
            type="text" 
            placeholder="请输入内容"
            className="border border-gray-300 rounded px-2 py-1 text-sm w-32 focus:outline-none focus:border-blue-500"
            value={filters.dispatcher}
            onChange={(e) => handleChange('dispatcher', e.target.value)}
          />
        </InputGroup>

        {/* Technician */}
        <InputGroup label="师傅">
          <input 
            type="text" 
            placeholder="请输入内容"
            className="border border-gray-300 rounded px-2 py-1 text-sm w-32 focus:outline-none focus:border-blue-500"
            value={filters.technician}
            onChange={(e) => handleChange('technician', e.target.value)}
          />
        </InputGroup>

        {/* Technician UID */}
        <InputGroup label="师傅uid">
          <input 
            type="text" 
            placeholder="请输入内容"
            className="border border-gray-300 rounded px-2 py-1 text-sm w-32 focus:outline-none focus:border-blue-500"
            value={filters.technicianUid}
            onChange={(e) => handleChange('technicianUid', e.target.value)}
          />
        </InputGroup>

        {/* Order No */}
        <InputGroup label="订单号">
          <input 
            type="text" 
            placeholder="请输入内容"
            className="border border-gray-300 rounded px-2 py-1 text-sm w-32 focus:outline-none focus:border-blue-500"
            value={filters.orderNo}
            onChange={(e) => handleChange('orderNo', e.target.value)}
          />
        </InputGroup>

        {/* Order Source */}
        <InputGroup label="订单来源">
          <select 
            className="border border-gray-300 rounded px-2 py-1 text-sm w-32 text-gray-500 focus:outline-none focus:border-blue-500 bg-white"
            value={filters.orderSource}
            onChange={(e) => handleChange('orderSource', e.target.value)}
          >
            <option value="">请选择</option>
            <option value="app">App</option>
            <option value="web">Web</option>
          </select>
        </InputGroup>

        {/* Is Prepaid */}
        <InputGroup label="是否垫付">
          <select 
            className="border border-gray-300 rounded px-2 py-1 text-sm w-32 text-gray-500 focus:outline-none focus:border-blue-500 bg-white"
            value={filters.isPrepaid}
            onChange={(e) => handleChange('isPrepaid', e.target.value)}
          >
            <option value="">请选择</option>
            <option value="yes">是</option>
            <option value="no">否</option>
          </select>
        </InputGroup>

         {/* Is Supplemental */}
         <InputGroup label="是否补款">
          <select 
            className="border border-gray-300 rounded px-2 py-1 text-sm w-32 text-gray-500 focus:outline-none focus:border-blue-500 bg-white"
            value={filters.isSuppPayment}
            onChange={(e) => handleChange('isSuppPayment', e.target.value)}
          >
            <option value="">请选择</option>
            <option value="yes">是</option>
            <option value="no">否</option>
          </select>
        </InputGroup>

        {/* Status */}
        <InputGroup label="状态">
          <select 
            className="border border-gray-300 rounded px-2 py-1 text-sm w-32 text-gray-500 focus:outline-none focus:border-blue-500 bg-white"
            value={filters.status}
            onChange={(e) => handleChange('status', e.target.value)}
          >
            <option value="">请选择</option>
            <option value="pending">审核中</option>
            <option value="completed">已完成</option>
          </select>
        </InputGroup>

        {/* Buttons */}
        <div className="flex items-center gap-2 mb-3 ml-4">
          <button 
            onClick={onSearch}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded text-sm flex items-center gap-1 transition-colors"
          >
            <Search size={14} />
            搜索
          </button>
          <button 
            onClick={onReset}
            className="border border-gray-300 bg-white hover:bg-gray-50 text-gray-600 px-4 py-1 rounded text-sm flex items-center gap-1 transition-colors"
          >
            <RotateCcw size={14} />
            重置
          </button>
          <button 
            onClick={onExport}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded text-sm flex items-center gap-1 transition-colors shadow-sm"
          >
            <Download size={14} />
            导出
          </button>
        </div>

      </div>
    </div>
  );
};