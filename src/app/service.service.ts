import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ServiceService {

    constructor(public httpClient: HttpClient) { }
    getData = (): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = "http://localhost:3000/books";
            this.httpClient.get(url)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }
    deleteData = (id): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = `http://localhost:3000/books/${id}`;
            this.httpClient.delete(url)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }
    createData = (book): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = "http://localhost:3000/books";
            this.httpClient.post(url, book)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }
    detailData = (id): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = `http://localhost:3000/books/${id}`;
            this.httpClient.get(url)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }
    updateData = (id, user): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = `http://localhost:3000/books/${id}`;
            this.httpClient.put(url, user)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }
}
