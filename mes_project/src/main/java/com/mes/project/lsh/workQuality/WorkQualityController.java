package com.mes.project.lsh.workQuality;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class WorkQualityController {
	
	@Autowired
	private WorkQualityService workQualityService;

	// 조회
	@RequestMapping(value="/workQuality", method= {RequestMethod.GET})
	public String selctController(Model model) {

		Map<String, Object> map = workQualityService.selectService();

		model.addAttribute("detailList", map.get("detailList"));
		model.addAttribute("facilityList", map.get("facilityList"));
		model.addAttribute("workQualityDTO", map.get("workQualityDTO"));
		
		return "workQuality";
	}
	
	// 추가
	@RequestMapping(value="/workQuality", method= {RequestMethod.POST})
	public String insertController(@ModelAttribute WorkQualityDTO workQualityDTO) {
		
		workQualityService.insertService(workQualityDTO);
		return "redirect:workQuality";
	}
	
	// 수정
	@RequestMapping(value="/workQuality/update", method= {RequestMethod.POST})
	public String updateController(@ModelAttribute WorkQualityDTO workQualityDTO) {

		workQualityService.updateService(workQualityDTO);
		return "redirect:/workQuality";
	}
	
	// 삭제
	@RequestMapping(value="/workQuality/delete", method= {RequestMethod.POST})
	public String deleteController(@ModelAttribute WorkQualityDTO workQualityDTO) {
		
		workQualityService.deleteService(workQualityDTO);
		return "redirect:/workQuality";
	}
}
