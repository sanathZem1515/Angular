import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";

@Injectable({providedIn:'root'})
export class DataStorageService implements OnInit{
    constructor(private http:HttpClient) {
        
    }
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
}