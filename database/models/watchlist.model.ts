import { type Document, model, models, type Model, Schema } from 'mongoose';

export interface WatchlistItem extends Document {
    userId: string;
    symbol: string;
    company: string;
    addedAt: Date;
}

const WatchlistSchema = new Schema<WatchlistItem>(
    {
        userId: { type: String, required: true, index: true },
        symbol: { type: String, required: true, uppercase: true, trim: true },
        company: { type: String, required: true, trim: true },
        addedAt: { type: Date, default: Date.now },
    },
    { timestamps: false }
);

// Compound unique index so a user can't add the same symbol twice
WatchlistSchema.index({ userId: 1, symbol: 1 }, { unique: true });

// Avoid model overwrite upon hot-reload in development
export const Watchlist: Model<WatchlistItem> = (models?.Watchlist as Model<WatchlistItem>) || model<WatchlistItem>('Watchlist', WatchlistSchema);