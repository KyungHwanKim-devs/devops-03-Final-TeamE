package com.api.apiserver.controller;

import com.api.apiserver.DTO.product.ProductsDTO;
import com.api.apiserver.service.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;


@RestController
@AllArgsConstructor
public class ProductController {

    private final ProductService productService;

    // TODO 테스트코드 작성필요
    @GetMapping("/products")
    public ResponseEntity<List<ProductsDTO>> getAllProducts() {
        return ResponseEntity.ok(productService.getAllProducts());
    }

    // TODO 테스트코드 작성필요
    @GetMapping("/{companyId}/products")
    public ResponseEntity<List<ProductsDTO>> getAllProductsByCompanyId(
            @Valid @PathVariable("companyId") Long companyId
    ) {
        return ResponseEntity.ok(productService.getAllProductsByCompanyId(companyId));
    }

    // TODO 테스트코드 작성필요
    @GetMapping("/{companyId}/products/{category}")
    public ResponseEntity<List<ProductsDTO>> getAllProductsByCompanyIdAndCategory(
            @Valid @PathVariable("companyId") Long companyId,
            @Valid @PathVariable("category") String category) {
        return ResponseEntity.ok(productService.getAllProductsByCompanyIdAndCategory(companyId, category));
    }

}
