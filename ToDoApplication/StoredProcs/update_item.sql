DROP Procedure update_item
GO
CREATE PROCEDURE dbo.update_item
(
	@itemName nvarchar(MAX)
	, @ItemID int
)
AS
BEGIN
	Update tblItems
	SET ItemName = @itemName
	WHERE ItemID =  @ItemID
 
END