package com.mes.project.lsh.workQuality;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WorkQualityService {

	@Autowired
	private WorkQualityDAO workQualityDAO;
	
	// 조회
	public Map<String, Object> selectService() {
		
		List<WorkQualityDTO> detailList = workQualityDAO.selectWorkQualityDetail();
		List<WorkQualityDTO> facilityList = workQualityDAO.selectWorkQualityFacility();
		WorkQualityDTO workQualityDTO = workQualityDAO.selectWorkQualityStaff();
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("detailList", detailList);
		map.put("facilityList", facilityList);
		map.put("workQualityDTO", workQualityDTO);
		
		return map;
	}
	
	// 추가
	public void insertService(WorkQualityDTO workQualityDTO) {

		// 들어온 내용을 엔터키를 \\n 으로 변경
		workQualityDTO.setW_detail( workQualityDTO.getW_detail().replace(System.lineSeparator(), "\\n") );
		workQualityDAO.insertWorkQuality(workQualityDTO);
	}
	
	// 수정
	public void updateService(WorkQualityDTO workQualityDTO) {
		
		// 들어온 내용을 엔터키를 \\n 으로 변경
		workQualityDTO.setW_detail( workQualityDTO.getW_detail().replace(System.lineSeparator(), "\\n") );
		workQualityDAO.updateWorkQuality(workQualityDTO);
	}
	
	// 삭제
	public void deleteService(WorkQualityDTO workQualityDTO) {
		
		workQualityDAO.deleteWorkQuality(workQualityDTO);
	}
}
