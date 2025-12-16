import React from 'react';
import { AuditRecord } from '../types';

interface DataTableProps {
  data: AuditRecord[];
  onOrderClick: (orderNo: string) => void;
}

export const DataTable: React.FC<DataTableProps> = ({ data, onOrderClick }) => {
  return (
    <div className="overflow-x-auto relative shadow-sm rounded-sm">
      <table className="w-full border-collapse min-w-[1800px] text-sm">
        <thead>
          <tr className="bg-[#f5f7fa] text-[#909399] font-medium border-b border-[#ebeef5]">
            <th className="py-3 px-3 text-center w-14 font-medium">序号</th>
            <th className="py-3 px-3 text-left font-medium">是否垫付</th>
            <th className="py-3 px-3 text-left font-medium">师傅</th>
            <th className="py-3 px-3 text-left font-medium">师傅uid</th>
            <th className="py-3 px-3 text-left font-medium">派单员</th>
            <th className="py-3 px-3 text-left font-medium">来源</th>
            <th className="py-3 px-3 text-left font-medium">订单号</th>
            <th className="py-3 px-3 text-center font-medium">查看券码</th>
            <th className="py-3 px-3 text-center font-medium">状态</th>
            <th className="py-3 px-3 text-left font-medium">总收款</th>
            <th className="py-3 px-3 text-left font-medium">成本</th>
            <th className="py-3 px-3 text-left font-medium">业绩</th>
            <th className="py-3 px-3 text-left font-medium">完工收入</th>
            <th className="py-3 px-3 text-left w-40 font-medium">申请时间</th>
            <th className="py-3 px-3 text-left font-medium">审核时间</th>
            <th className="py-3 px-3 text-left font-medium">审核人</th>
            <th className="py-3 px-3 text-left font-medium">审核意见</th>
            <th className="py-3 px-3 text-left font-medium">补款金额</th>
            <th className="py-3 px-3 text-left font-medium">补款状态</th>
            <th className="py-3 px-3 text-center w-32 font-medium sticky right-0 bg-[#f5f7fa] z-10 shadow-[-5px_0_10px_-5px_rgba(0,0,0,0.1)]">操作</th>
          </tr>
        </thead>
        <tbody className="text-[#606266]">
          {data.map((row) => (
            <tr key={row.id} className="border-b border-[#ebeef5] hover:bg-[#f5f7fa] transition-colors group">
              <td className="py-3 px-3 text-center">{row.serialNo}</td>
              <td className="py-3 px-3">{row.isPrepaid}</td>
              <td className="py-3 px-3 font-medium text-[#303133]">{row.technician}</td>
              <td className="py-3 px-3">{row.technicianUid}</td>
              <td className="py-3 px-3">{row.dispatcher}</td>
              <td className="py-3 px-3">{row.source}</td>
              <td className="py-3 px-3">
                <button 
                  onClick={() => onOrderClick(row.orderNo)}
                  className="text-[#409eff] hover:underline hover:text-[#66b1ff]"
                >
                  {row.orderNo}
                </button>
              </td>
              <td className="py-3 px-3 text-center text-[#909399]">
                查看券码
              </td>
              <td className="py-3 px-3 text-center">
                 <span className={`px-2 py-0.5 rounded text-xs border ${
                   row.status === '已完成' 
                     ? 'bg-[#f0f9eb] text-[#67c23a] border-[#e1f3d8]' 
                     : 'bg-[#fdf6ec] text-[#e6a23c] border-[#faecd8]'
                 }`}>
                    {row.status}
                 </span>
              </td>
              <td className="py-3 px-3">{row.totalCollection}</td>
              <td className="py-3 px-3">{row.cost}</td>
              <td className="py-3 px-3">{row.performance}</td>
              <td className="py-3 px-3 font-bold text-[#f56c6c]">{row.completionIncome}</td>
              <td className="py-3 px-3 text-[#909399] text-xs font-mono">{row.appTime}</td>
              <td className="py-3 px-3 text-[#909399] text-xs font-mono">{row.auditTime}</td>
              <td className="py-3 px-3">{row.auditor}</td>
              <td className="py-3 px-3">{row.auditRemarks}</td>
              <td className="py-3 px-3">{row.suppAmount}</td>
              <td className="py-3 px-3">{row.suppStatus}</td>
              <td className="py-3 px-3 text-center sticky right-0 bg-white group-hover:bg-[#f5f7fa] z-10 shadow-[-5px_0_10px_-5px_rgba(0,0,0,0.1)]">
                <div className="flex justify-center gap-2">
                    <button className="bg-[#ff6900] hover:bg-[#ff7d26] text-white px-3 py-1 rounded text-xs transition-colors">
                      审核
                    </button>
                    <button className="border border-[#dcdfe6] bg-white hover:border-[#c6e2ff] hover:bg-[#ecf5ff] hover:text-[#409eff] text-[#606266] px-3 py-1 rounded text-xs transition-colors">
                      补款
                    </button>
                </div>
              </td>
            </tr>
          ))}
          {data.length === 0 && (
            <tr>
                <td colSpan={20} className="text-center py-12 text-[#909399]">
                    暂无数据
                </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};