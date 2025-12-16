import React, { useState } from 'react';
import { FilterBar } from './components/FilterBar';
import { DataTable } from './components/DataTable';
import { OrderDetailModal } from './components/OrderDetailModal';
import { AuditRecord, FilterState } from './types';
import { Bell, Trophy, Megaphone, Activity, Search } from 'lucide-react';

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
  const [isFilterCollapsed, setIsFilterCollapsed] = useState(true);
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
        
        {/* System Announcement Bar */}
        <div className="bg-[#fdf6ec] text-[#e6a23c] px-4 py-2.5 flex items-center text-xs border-b border-[#faecd8] overflow-hidden h-[42px]">
           {/* Static Label */}
           <div className="flex items-center gap-2 mr-4 shrink-0 font-bold z-10 bg-[#fdf6ec] pr-2 shadow-[5px_0_5px_-5px_rgba(0,0,0,0.1)]">
              <Bell size={14} className="text-[#e6a23c]" /> 
              <span>系统公告</span>
           </div>
           
           {/* Scrolling Content */}
           <div className="flex-1 overflow-hidden relative h-full">
              <div className="animate-marquee flex items-center gap-16 whitespace-nowrap absolute top-0 bottom-0">
                  <span className="text-[#606266]">保存数据。</span>
                  
                  <div className="flex items-center gap-2">
                      <Trophy size={14} className="text-[#e6a23c]" />
                      <span className="font-bold text-[#e6a23c]">喜报:</span>
                      <span className="text-[#606266]">恭喜上海浦东区张师傅获得本月“服务之星”称号，奖励现金 500 元！</span>
                  </div>

                  <div className="flex items-center gap-2">
                      <Megaphone size={14} className="text-[#e6a23c]" />
                      <span className="font-bold text-[#67c23a]">新功能上线:</span>
                      <span className="text-[#606266]">“一键快找”功能已优化，支持按地域和项目模糊搜索，欢迎体验。</span>
                  </div>
              </div>
           </div>
        </div>

        {/* Data Overview Bar */}
        <div className="mx-4 mt-4 mb-0 bg-[#ecf5ff] p-3 rounded-sm flex flex-wrap items-center justify-between border border-[#d9ecff] gap-4">
            <div className="flex items-center gap-2">
                <Activity size={18} className="text-[#409eff]" />
                <span className="font-bold text-[#303133] text-base">数据概览</span>
            </div>
            
            <div className="flex flex-wrap items-center gap-8 sm:gap-16 flex-1 justify-center sm:justify-start">
                <div className="flex items-baseline gap-2">
                    <span className="text-[#606266]">未审核数:</span>
                    <span className="text-[#f56c6c] font-bold text-lg">12</span>
                </div>
                <div className="flex items-baseline gap-2">
                    <span className="text-[#606266]">今日审核数:</span>
                    <span className="text-[#409eff] font-bold text-lg">45</span>
                </div>
                 <div className="flex items-baseline gap-2">
                    <span className="text-[#606266]">昨日审核数:</span>
                    <span className="text-[#67c23a] font-bold text-lg">38</span>
                </div>
                 <div className="flex items-baseline gap-2">
                    <span className="text-[#606266]">当月审核数:</span>
                    <span className="text-[#e6a23c] font-bold text-lg">1,250</span>
                </div>
            </div>

            <button 
                onClick={() => setIsFilterCollapsed(!isFilterCollapsed)}
                className="flex items-center gap-1 text-[#409eff] hover:text-[#66b1ff] text-sm cursor-pointer transition-colors whitespace-nowrap"
            >
                <Search size={14} />
                <span>点这高级筛选</span>
            </button>
        </div>

        {/* Filter Section - controlled by toggle button above */}
        <FilterBar 
            filters={filters} 
            setFilters={setFilters} 
            onSearch={handleSearch} 
            onReset={handleReset}
            onExport={handleExport}
            collapsed={isFilterCollapsed}
        />
            
        {/* Data Table */}
        <div className="pt-4 pb-4">
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