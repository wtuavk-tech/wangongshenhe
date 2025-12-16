import React, { useState } from 'react';
import { FilterBar } from './components/FilterBar';
import { DataTable } from './components/DataTable';
import { OrderDetailModal } from './components/OrderDetailModal';
import { AuditRecord, FilterState } from './types';
import { ChevronUp, ChevronDown } from 'lucide-react';

// Helper to generate 15 random records with generic names
const generateMockData = (): AuditRecord[] => {
  const technicians = ['张三', '李四', '王五', '赵六', '孙七'];
  const dispatchers = ['周八', '吴九', '郑十', '钱十一', '孙十二'];
  const sources = ['App', 'Web', '小程序', '电话'];
  
  return Array.from({ length: 15 }).map((_, i) => ({
    id: i + 1,
    serialNo: i + 1,
    isPrepaid: Math.random() > 0.5 ? '是' : '否' as '是' | '否',
    technician: technicians[Math.floor(Math.random() * technicians.length)],
    technicianUid: Math.floor(Math.random() * 10000 + 1000).toString(),
    dispatcher: dispatchers[Math.floor(Math.random() * dispatchers.length)],
    source: sources[Math.floor(Math.random() * sources.length)],
    orderNo: `2512${Math.floor(1000000000 + Math.random() * 9000000000)}`,
    status: Math.random() > 0.8 ? '已完成' : '申请',
    totalCollection: Math.floor(Math.random() * 500) + 50,
    cost: Math.floor(Math.random() * 50),
    performance: Math.floor(Math.random() * 100),
    completionIncome: Math.floor(Math.random() * 200) + 100,
    appTime: `2025-12-${10 + Math.floor(Math.random() * 20)} ${Math.floor(Math.random() * 24).toString().padStart(2, '0')}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
    auditTime: '',
    auditor: '',
    auditRemarks: '',
    suppAmount: 0,
    suppStatus: '',
  }));
};

const MOCK_DATA = generateMockData();

const INITIAL_FILTERS: FilterState = {
  startDate: '',
  endDate: '',
  dispatcher: '',
  technician: '',
  technicianUid: '',
  orderNo: '',
  orderSource: '',
  isPrepaid: '',
  isSuppPayment: '',
  status: '',
};

function App() {
  const [filters, setFilters] = useState<FilterState>(INITIAL_FILTERS);
  const [isFilterCollapsed, setIsFilterCollapsed] = useState(false);
  const [data, setData] = useState<AuditRecord[]>(MOCK_DATA);
  const [selectedOrderNo, setSelectedOrderNo] = useState<string | null>(null);

  const handleSearch = () => {
    // In a real app, this would filter based on state
    console.log('Searching with:', filters);
    // Simulating a refresh
    setData(generateMockData());
  };

  const handleReset = () => {
    setFilters(INITIAL_FILTERS);
  };

  const handleExport = () => {
    console.log('Exporting data...');
    alert('导出功能已触发');
  };

  const handleOrderClick = (orderNo: string) => {
    setSelectedOrderNo(orderNo);
  };

  const handleCloseModal = () => {
    setSelectedOrderNo(null);
  };

  const handleConfirmModification = () => {
    console.log('Modification confirmed for order:', selectedOrderNo);
    // Here you would typically make an API call to save changes
    setSelectedOrderNo(null);
  };

  return (
    <div className="min-h-screen bg-[#f0f2f5] p-4 font-sans text-sm">
      <div className="bg-white rounded-sm shadow-sm border border-gray-200">
        
        {/* Header Title */}
        <div className="border-b border-gray-200 px-6 py-3">
          <h1 className="text-base font-bold text-gray-800">完工审核</h1>
        </div>

        {/* Filter Section */}
        <div className="relative">
            <FilterBar 
              filters={filters} 
              setFilters={setFilters} 
              onSearch={handleSearch} 
              onReset={handleReset}
              onExport={handleExport}
              collapsed={isFilterCollapsed}
            />
            
            {/* Collapse/Expand Toggle & Divider */}
            <div className="relative h-4 mt-2 mb-2">
                <div className="absolute w-full top-1/2 border-t border-gray-100"></div>
                <button 
                    onClick={() => setIsFilterCollapsed(!isFilterCollapsed)}
                    className="absolute right-6 top-1/2 -translate-y-1/2 z-10"
                >
                    {/* The specific blue trapezium-like tab from the screenshot */}
                    <div className="bg-blue-500 text-white px-4 py-0.5 text-xs rounded-b-lg flex items-center justify-center cursor-pointer hover:bg-blue-600 shadow-sm" style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 15% 100%)', width: '80px' }}>
                        <span className="mr-1">{isFilterCollapsed ? '展开' : '收起'}</span>
                        {isFilterCollapsed ? <ChevronDown size={12} /> : <ChevronUp size={12} />}
                    </div>
                </button>
            </div>
        </div>

        {/* Data Table */}
        <div className="pb-4">
           <DataTable data={data} onOrderClick={handleOrderClick} />
        </div>

      </div>

      {/* Order Detail Modal */}
      {selectedOrderNo && (
        <OrderDetailModal 
          orderNo={selectedOrderNo} 
          onClose={handleCloseModal} 
          onConfirm={handleConfirmModification}
        />
      )}
    </div>
  );
}

export default App;