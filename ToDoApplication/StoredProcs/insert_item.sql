DROP Procedure insert_item
GO
CREATE PROCEDURE dbo.insert_item
(
	@itemName nvarchar(MAX)
)
AS
BEGIN
	INSERT INTO tblItems
	(ItemName)
	VALUES
	(@itemName)

	SELECT
		ItemID
		, ItemName
		, isCompleted
	FROM tblItems WITH (NOLOCK)
	WHERE ItemID = 	@@IDENTITY
 
END