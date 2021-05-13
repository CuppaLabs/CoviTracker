import { Observable } from 'rxjs';

export interface TimestampObservableCache {
    expires: number;
    observable: any;
}